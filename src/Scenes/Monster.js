class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        // arms
        this.armRightX = this.bodyX + 90;
        this.armRightY = this.bodyY + 30;

        this.armLeftX = this.bodyX - 90;
        this.armLeftY = this.bodyY + 30;

        // legs
        this.legRightX = this.bodyX + 60;
        this.legRightY = this.bodyY + 100;

        this.legLeftX = this.bodyX - 60;
        this.legLeftY = this.bodyY + 100;

        // eyes
        this.eyeRightX = this.bodyX;
        this.eyeRightY = this.bodyY;
        
        this.eyeLeftX = this.bodyX;
        this.eyeLeftY = this.bodyY;

        // sensory
        this.noseX = this.bodyX;
        this.noseY = this.bodyY;

        this.earRightX = this.bodyX;
        this.earRightY = this.bodyY;

        this.earLeftX = this.bodyX;
        this.earLeftY = this.bodyY;

        // mouths
        this.mouthSmileX = this.bodyX;
        this.mouthSmileY = this.bodyY;

        this.mouthFangsX = this.bodyX;
        this.mouthFangsY = this.bodyY;   
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        

        my.sprite.armRight = this.add.sprite(this.armRightX, this.armRightY, "monsterParts", "arm_darkE.png");
        my.sprite.armRight.angle = -30;

        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armLeftY, "monsterParts", "arm_yellowE.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armLeft.angle = 30;
        
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legRightY, "monsterParts", "leg_greenE.png")
    
        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legLeftY, "monsterParts", "leg_blueC.png")
        my.sprite.legLeft.flipX = true;
        


        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}