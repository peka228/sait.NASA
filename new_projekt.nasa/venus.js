const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight); // Задаємо розмір для половини екрану
document.getElementById('solar-system').appendChild(renderer.domElement);

// Текстура Сонця
const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('textures/Venus.png'); // Вкажіть шлях до текстури

// Модель Сонця
const geometry = new THREE.SphereGeometry(3, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(geometry, material);
scene.add(sun);


camera.position.z = 10;

// OrbitControls для навігації
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

function animate() {
    requestAnimationFrame(animate);

    // Обертання Сонця навколо своєї осі
    sun.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
}

animate();

// Підтримка зміни розміру вікна
window.addEventListener('resize', () => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight;

    // Правильне співвідношення сторін для камери, щоб уникнути сплющення
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});