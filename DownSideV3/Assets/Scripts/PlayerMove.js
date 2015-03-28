#pragma strict

var player : GameObject;
var speed : float = 0.75;
var spriteLeft: Sprite;
var spriteRight: Sprite;

function Start () {

}

function Update () {

      if(Input.GetKey(KeyCode.LeftArrow)){
      
            this.transform.position.x -= 0.5 * Time.deltaTime * 25;
           	GetComponent(SpriteRenderer).sprite = spriteLeft;
         }
         else if(Input.GetKey(KeyCode.RightArrow)){
             this.transform.position.x +=  Time.deltaTime * 25;
             GetComponent(SpriteRenderer).sprite = spriteRight;
         }
     }