<template>
    <section class="login_box">
        <div class="backimg"></div>
        <i class="login_err">&#xe6e9;</i>
        <div class="login_con_box">
            <div class="list_div">
                <i class="flexbox_mine">&#xe70e;</i>
                <span>用户名称</span>
                <input type="text" v-model="user.name" />           
            </div>
            <div class="list_div">
                <i class="flexbox_mine">&#xe73a;</i>
                <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
                <input type="text" v-model="user.password" />           
            </div>
            <p class="login_p">
                <a href="#">忘记密码？</a>
            </p>
            <button class="login_button">登陆</button>
            <p class="login_p2"><i>你是否已经注册？</i><a href="#">注册</a></p>
        </div>    
    </section>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                }
            }
        }
    }
</script>

<style lang="scss">

    .login_box{
       
        width: 100%;
        height: 100%;
       
        padding-top: 35%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position:relative;
        // -webkit-filter:grayscale(70%) opacity(70%);
        // filter:grayscale(70%) opacity(70%);
        .backimg{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
             background-image: url('../../assets/images/login_icon.jpg');
              background-size: cover;
              -webkit-filter:grayscale(70%) opacity(70%);
        filter:grayscale(70%) opacity(70%);
        z-index: -1;
        }
        i{
            font-style: normal;
        }
        i.login_err{
            position:absolute;
            top: 1rem;
            left: 1rem;
            font-family: 'iconFont';
            font-style: normal;
            color: #fff;
            font-size: 1.5rem;
        }
        .login_con_box{
            -webkit-filter:none;
            filter:none;
            .list_div{
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                height:3.5rem;
                width: 100%;
                padding: .5rem 1rem;
                border-bottom: 1px solid #eee;
                display:-webkit-box;
                display:-webkit-flex;
                display:-ms-flexbox;
                display:flex;
                i.flexbox_mine{
                    display: block;
                    width: 3rem;
                    text-align: center;
                    line-height: 2.5rem;
                    font-family: 'iconFont';
                    color: #fff;
                    font-size: 2rem;
                }
                span{
                    display: block;
                    line-height:2.5rem;
                    font-size: 1rem;
                    color:#fff;
                    margin-right:.3rem;
                }
                input{
                    display:block;
                    height:2.5rem;
                    border: none;
                    background-color: transparent;
                    font-size: .9rem;
                    line-height: 2.5rem;
                    -webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;
                    color: #fff;
                }
            }
            .login_p{
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                padding: 1rem 1rem;
                text-align: right;
                font-size: .8rem;
                color: #fff; 
                a{
                    color: #fff;
                }
            }
            .login_button{
                height:3.5rem;
                border: none;
                background-color:#6CD4C8;
                width: 100%;
                color: #fff;
                line-height: 3.5rem;
                letter-spacing: 1rem;
                font-size: 1.2rem;
                margin-top: 3rem;
            }
            .login_p2{
               box-sizing: border-box;
                -webkit-box-sizing: border-box;
                padding: 1rem 20%;
                font-size: 1rem;
                color: #eee;
                overflow: hidden; 
                a{
                    color: #fff;
                    float:right;
                    letter-spacing:.3rem;
                } 
            }
        }
    }

</style>