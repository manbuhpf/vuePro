<template>
    <section class="register_box">
        <div class="back_img"></div>
        <i class="icons icon-zhixiangzuo prev_icon" @click="goBack()"></i>
        <div class="register_con_box">
            <div class="list_div">
                <i class="flexbox_mine">&#xe70e;</i>
                <span>用户名称:</span>
                <input type="text" v-model="userName" />           
            </div>
            <div class="list_div">
                <i class="flexbox_mine">&#xe885;</i>
                <span>注册邮箱:</span>
                <input type="text" />           
            </div>
            <div class="list_div">
                <i class="flexbox_mine">&#xe73a;</i>
                <span>登录密码:</span>
                <input type="text" />           
            </div>
            <div class="list_div">
                <i class="flexbox_mine">&#xe73a;</i>
                <span>确认密码:</span>
                <input type="text" />           
            </div>
            <button class="login_button">注册</button>
        </div>
    </section>
</template>

<script>
    import { mapGetters , mapActions} from 'vuex'
    export default {
        name: 'register',
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
        computed: {
            ...mapGetters({
                userName: 'getUserName'
            })
        }
    }
</script>

<style lang="scss">
    .register_box{
        width: 100%;
        height: 100%;
       
        padding-top: 35%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        position:relative;
        // -webkit-filter:grayscale(70%) opacity(70%);
        // filter:grayscale(70%) opacity(70%);
        .back_img{
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
            font-style: normal
        }
        i.prev_icon{
            position: absolute;
             top: 1rem;
            left: 1rem;
            font-family: 'iconFont';
            font-style: normal;
            color: #fff;
            font-size: 1.5rem;
        }
        .register_con_box{
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
        }
    }
</style>