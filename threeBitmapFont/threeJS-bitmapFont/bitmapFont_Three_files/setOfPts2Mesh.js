/**
 * Created by user on 11/15/2017.
 */

function setOfPts2Geom(sop){
    var geometry = new THREE.Geometry();
    for(var i=0; i<sop.length; i++){
        geometry.vertices.push( new THREE.Vector3(sop[i][0], sop[i][1], sop[i][2]) );
    }
    return geometry;
}

function setOfPts2Mesh(sop, size, color){
    var material = new THREE.PointsMaterial( { size: size || 1.0, color: color || 0xff00ff } );
    var pointcloud = new THREE.Points( setOfPts2Geom(sop), material );
    return pointcloud;
}