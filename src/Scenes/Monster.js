class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

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
        let my = this.my;


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        // arms
        my.sprite.armRight = this.add.sprite(this.bodyX + 90, this.bodyY + 30, "monsterParts", "arm_darkE.png");
        my.sprite.armRight.angle = -30;

        my.sprite.armLeft = this.add.sprite(this.bodyX - 90, this.bodyY + 30, "monsterParts", "arm_yellowE.png");
        my.sprite.armLeft.flipX = true;
        my.sprite.armLeft.angle = 30;
        
        // legs
        my.sprite.legRight = this.add.sprite(this.bodyX + 60, this.bodyY + 100, "monsterParts", "leg_greenE.png");
    
        my.sprite.legLeft = this.add.sprite(this.bodyX - 60, this.bodyY + 100, "monsterParts", "leg_blueC.png");
        my.sprite.legLeft.flipX = true;

        // right ear
        my.sprite.headRight = this.add.sprite(this.bodyX + 60, this.bodyY - 90, "monsterParts", "detail_green_ear.png");
        
        // body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        
        // left antenna
        my.sprite.headLeft = this.add.sprite(this.bodyX - 50, this.bodyY - 110, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.headLeft.flipX = true;
        my.sprite.headLeft.angle = -30;

        // eyes
        my.sprite.eyeLeft = this.add.sprite(this.bodyX - 30, this.bodyY - 50, "monsterParts", "eye_human.png");
        my.sprite.eyeRight = this.add.sprite(this.bodyX + 33, this.bodyY - 50, "monsterParts", "eye_dead.png");
        
        // nose
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "nose_yellow.png");

        // mouths
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 25, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 25, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        
        // keys
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);


    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.my.sprite.fangs.visible = false;
            this.my.sprite.smile.visible = true;
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyF)) {
            this.my.sprite.smile.visible = false;
            this.my.sprite.fangs.visible = true;
        }

        if (this.keyA.isDown) {
            for (let part in this.my.sprite) {
                this.my.sprite[part].x -= 1;
            }
        }

        if (this.keyD.isDown) {
            for (let part in this.my.sprite) {
                this.my.sprite[part].x += 1;
            }
        }
       
    }

}