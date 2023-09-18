import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

export function initSTLViewer(stlFilePath, containerElementId) {
  // Create a scene
  let scene = new THREE.Scene();

  //Get the size of the container
  let container = document.getElementById(containerElementId);

  // Create a camera 
  let camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a renderer and append it to the container
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('green'); // Set background color to white
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);


  // Load STL
  let loader = new STLLoader();
  loader.load(stlFilePath, function (geometry) {
    let material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Set color to red
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  });

  var light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 0, 10);
  scene.add(light);


  // Animation
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}