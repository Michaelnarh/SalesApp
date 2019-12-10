import styled from '../../node_modules/styled-components'
export const Twrapper = styled.section`
// display:justify;
// overflow:hidden;
// display:wrap-content;
.card{
  border-color:transparent;
  transition : all 1s linear;
}
.card-footer{
  background: transparent;
  border-top:tranparent;
  transiton: all 1s linear;
}
&:hover{
  .card{
    border-bottom:4px solid rgba(0,0,0,0.2);
    border-left:4px solid rgba(0,0,0,0.2);
    box-shadow:1px 1px 3px rgba(0,0,0,0.2);
  }
  .card-footer{
    background:rgba(127,277,247);
  }
}
.img-container:hover .card-img-top {
 transform:scale(1.01);
 overflow:hidden;
 justify-content:center;
}
 
.cart-btn {
    postion:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem
    border-radius:0.5rem 1 1 0;
    background:var(--mainOrange);
    margin-left:208px;
    margin-bottom:35px; 
    color:var(--mainwhite);
    font-size:1.4rem
    transform:translate(100%, 100%);
    transition:all 1s linear
   
  } 
  img-container:hover  .cart-btn{
    tranform:translate(0,0);  
  }
  cart-btn:hover{
    cursor:pointer;
    color:var(--lightBlue)

  }
`

export const ButtonContainer = styled.button`
  border-radius: 0.4rem;
  border: 0.05rem solid var(--lightBlue);
  padding: 0.6rem 0.3rem;
  texttext-positon: center;
  text-decoration-style: unset;
  text-underline: none;
  border-color: ${props => (props.cart ? 'var(--mainOrange)' : 'var(--lightBlue)')};
  background: transparent;
  width: 140px;
  height: 50px;
  &:hover {
    background: ${props => (props.cart ? 'var(--mainOrange)' : 'var(--lightBlue)')};
    scale: 0.2;
    text-transform: italic;
    color: var(--mainWhite);
    text-decoration-style: none;
  }
`
export const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0
bottom:0;
display:flex;
align-items:center;
background:rgba(0,0,0,0.3)
justify-content:center;
#modal{
  background:var(--mainWhite);

}

`
