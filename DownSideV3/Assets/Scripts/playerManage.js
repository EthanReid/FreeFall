#pragma strict

static var score : int = 0;

function Start () {

}

function OnTriggerEnter2D(other: Collider2D) {
	Destroy(other);
	score += 1;
	Debug.Log("Score is:"+score);
}
function OnCollisionEnter2D(other: Collision2D){
	Debug.Log("This will be Game Over");
}