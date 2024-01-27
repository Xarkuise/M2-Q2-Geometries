//scene property
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//camera postion property
camera.position.z = 10;

//Box Geometry
const cubeGeometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: "green" } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

//Torus Geometry
const torusGeometry = new THREE.TorusGeometry( 1.4, 0.3227, 10, 100);
const torusMaterial = new THREE.MeshBasicMaterial( { color: "red" } );
const torus = new THREE.Mesh( torusGeometry, torusMaterial );
scene.add( torus );

//Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry( 1.5, 17, 32 ); 
const sphereMaterial = new THREE.MeshBasicMaterial( { color: "blue" } ); 
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial ); 
scene.add( sphere );

//Cylinder Geometry
const cylinderGeometry = new THREE.CylinderGeometry( 1.5, 1.5, 3.5, 32 ); 
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: "Yellow"} ); 
const cylinder = new THREE.Mesh( cylinderGeometry , cylinderMaterial ); 
scene.add( cylinder );

//Cone Geometry
const coneGeometry = new THREE.ConeGeometry( 2, 4, 32 ); 
const coneMaterial = new THREE.MeshBasicMaterial( {color: "white"} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial ); 
scene.add( cone );

//Torus Knot Geometry
const torusKnotGeometry = new THREE.TorusKnotGeometry( 1.41, 0.07, 300, 10, 11, 10); 
const torusKnotMaterial = new THREE.MeshBasicMaterial( { color: "purple" } ); 
const torusKnot = new THREE.Mesh( torusKnotGeometry, torusKnotMaterial ); 
scene.add( torusKnot );

//cube position property
cube.position.y = 4;
cube.position.x = 11;

//torus position property
torus.position.y =  4;
torus.position.x = -11;

//sphere position property
sphere.position.y = -4;
sphere.position.x = -11;

//cylinder position property
cylinder.position.y = -4;
cylinder.position.x = 11; 

//cone position property
cone.position.y = -3;

//torusKnot position property
torusKnot.position.y = 4;

//Scene animate
function animate() {
	requestAnimationFrame( animate );

    //Cube animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    //Torus animation
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;

    //Sphere animation
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    //Cylinder animation
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;

    //Cone animation
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.01;

    //Torus Know animation
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.z += 0.01;

	renderer.render( scene, camera );
}
animate();
