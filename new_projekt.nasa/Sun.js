const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight);
document.getElementById('canvasContainer').appendChild(renderer.domElement);

// Создаем геометрию сферы
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Загружаем текстуру
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('textures/Sun.png'); // Замените на URL вашей текстуры

// Создаем материал с текстурой
const material = new THREE.MeshBasicMaterial({ map: texture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Правильное позиционирование камеры
camera.position.z = 3;

const animate = function () {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01; // Вращение сферы
    renderer.render(scene, camera);
};
// Обработка изменения размера окна
const width = window.innerWidth / 2;
const height = window.innerHeight;
renderer.setSize(width, height);
camera.aspect = width / height;
camera.updateProjectionMatrix();



animate();
