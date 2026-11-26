#!/usr/bin/env node
/**
 * Simple script to generate an image via a remote ComfyUI instance.
 * Uses a lightweight Stable Diffusion model (~4 GB VRAM) to stay under 11 GB total.
 * No authentication required – assumes ComfyUI API is exposed on http://10.0.0.16:8188
 */
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const COMFY_URL = 'http://10.0.0.16:8188';

// Minimal workflow JSON – a KSampler feeding a StableDiffusion model into a SaveImage node.
// Adjust "model" and "vae" to whatever lightweight model the remote instance has.
const workflow = {
  "5": { // Load Checkpoint (node id 5)
    "class_type": "CheckpointLoaderSimple",
    "inputs": { "ckpt_name": "anima-preview3-base.safetensors" }


  },
  "6": { // KSampler (node id 6)
    "class_type": "KSampler",
    "inputs": {
      "seed": 12345,
      "steps": 20,
      "cfg": 7,
      "sampler_name": "euler",
      "scheduler": "normal",
      "model": ["5", 0]
    }
  },
  "8": { // VAE Decode
    "class_type": "VAEDecode",
    "inputs": { "samples": ["6", 0] }
  },
  "7": { // SaveImage (now uses node 8 output)
    "class_type": "SaveImage",
    "inputs": { "filename_prefix": "generated_art", "images": ["8", 0] }
  }
};

async function run() {
  // Submit the prompt (workflow) to ComfyUI
  const res = await fetch(`${COMFY_URL}/prompt`, {
    method: 'POST',
    body: JSON.stringify({ prompt: workflow }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  console.log('Prompt response:', data);
  const promptId = data.prompt_id || Object.keys(data)[0];


  // Poll for completion
  let status = null;
  while (true) {
    const statusRes = await fetch(`${COMFY_URL}/history/${promptId}`);
    const statusData = await statusRes.json();
    if (statusData.status?.status === 'completed') { status = statusData; break; }
    await new Promise(r => setTimeout(r, 1000));
  }

  // Retrieve the generated image
  const imageInfo = status.outputs["7"].images[0];
  const imgRes = await fetch(`${COMFY_URL}/${imageInfo}`);
  const buffer = await imgRes.buffer();
  const outPath = path.join(__dirname, 'public', 'assets', 'generated_art.png');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log('Image saved to', outPath);
}

run().catch(err => console.error('Error:', err));
