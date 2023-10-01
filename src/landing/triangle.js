// triangle.js

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MathUtils } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createTriangle(targetDivId) {
  const targetDiv = document.getElementById(targetDivId);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, targetDiv.clientWidth / targetDiv.clientHeight);
  camera.position.z = 100;
  camera.position.y = 40;
  camera.position.x = 0;
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(targetDiv.clientWidth, targetDiv.clientHeight);
  targetDiv.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  let model1, model2;

  loader.load('./both.gltf', function (gltf) {
    model1 = gltf.scene;
    scene.add(model1);
  }, undefined, function (error) {
    console.error(error);
  });

  loader.load('./ring.gltf', function (gltf) {
    model2 = gltf.scene;
    scene.add(model2);
  }, undefined, function (error) {
    console.error(error);
  });
renderer.setClearColor(0xfcfbf8); // white
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 5.0; // The higher the value, the faster the rotation

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
  animate();
}