let image = document.getElementById('image');
let marginLeft = 12;
let marginTop = 12;
image.style.marginLeft=`${marginLeft}rem`;
image.style.marginTop=`${marginTop}rem`;
let body = document.getElementById('body');
body.addEventListener('keydown', (key) => keyPressAction(key));
const keyPressAction = (key) => {
    console.log(key.keyCode);
    switch (key.keyCode) {
        // left
        case 37: 
        if(marginLeft>0)
        {marginLeft=marginLeft-4;
        image.style.marginLeft=`${marginLeft}rem`;
        }
            break;
        // top
        case 38:
            if(marginTop>0)
        {marginTop=marginTop-4;
        image.style.marginTop=`${marginTop}rem`;
        }
            break;
        // right
        case 39:
            if(marginLeft>0)
        {marginLeft=marginLeft+4;
        image.style.marginLeft=`${marginLeft}rem`;
        }
            break;
        // bottom
        case 40:
        marginTop=marginTop+4;
        image.style.marginTop=`${marginTop}rem`;
        
            break;
    }


}