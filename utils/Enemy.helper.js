import * as BABYLON from "@babylonjs/core";

export const createEnemy = (enemy) => {
  // update this to be called in the main loop, and store/create as an object
  const bodyMaterial = new BABYLON.StandardMaterial(
    "body_mat",
    enemy.getScene()
  );
  bodyMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.1, 0.3);
  bodyMaterial.backFaceCulling = false;

  const box = BABYLON.MeshBuilder.CreateBox("box", {}, enemy.getScene());
  box.material = bodyMaterial;
  box.position = new BABYLON.Vector3(-2.5, 0.1, -6.5);
  box.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
};

export const moveEnemy = (enemy) => {
  // testing
  // enemy.position = new BABYLON.Vector3(-1.5, 0.1, -6.5);
  enemy.position.z += 0.1;
};
