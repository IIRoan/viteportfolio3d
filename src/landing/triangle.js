// triangle.js

import * as THREE from 'three';

export function createTriangle(targetDivId) {
  const targetDiv = document.getElementById(targetDivId);
  
  // Create a scene
  const scene = new THREE.Scene();
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, targetDiv.clientWidth / targetDiv.clientHeight, 0.1, 1000);
  camera.position.z = 5;
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(targetDiv.clientWidth, targetDiv.clientHeight);
  
  // Add the renderer to the target div
  targetDiv.appendChild(renderer.domElement);
  
  // Create a geometry for the triangle
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array([
    -1, -1, 0,
    1, -1, 0,
    0, 1, 0
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setIndex([0, 1, 2]);
  
  
  // Create a material for the triangle
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  
  // Create a mesh with the geometry and material
  const triangle = new THREE.Mesh(geometry, material);
  
  // Add the triangle to the scene
  scene.add(triangle);
  
  // Render the scene with the camera
  function animate() {
    requestAnimationFrame(animate);
    triangle.rotation.x += 0.01;
    triangle.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}
