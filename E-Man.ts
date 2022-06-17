//% color="#1307f7" icon="\uf07b"
namespace eMan {
    //% block
    export function eManMove() {
        let E_Man = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 8 8 8 8 8 8 8 8 8 8 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 8 8 8 8 8 8 8 8 8 8 8 8 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
        controller.moveSprite(E_Man)
        

    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {

    }
}
