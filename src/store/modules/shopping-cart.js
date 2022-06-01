const shoppingCart={
    namespaced: true, // 命名空间（名字空间）
    state: {
        carts:[],
        token: '',
        name: '',
    },
    getters: {
        // 计算总复选框状态
        allChecked(state){
            if(state.carts.length ===0) return false
            return state.carts.every(prod=> prod.checked)
        },
        // 计算总价
        allMoney(state){
            return state.carts.reduce((sum,prod)=>{
                sum += prod.checked ? prod.price*prod.num :0
                return sum
            },0)
        },
    },
    mutations: {
        MODIFY_CART(state,payload){ // （要修改的数据 有效载荷）
            // console.log('state',state.carts,'payload',payload);
            state.carts=payload.carts
        },
        SET_TOKEN(state, payload) {
            state.token = payload.token
            state.name=payload.name
        },
        RESET_USER(state) {
            state.name = null
            state.token = null
        },
    },
    actions: {
        // 添加
        addToCarts(context,payload){ // （context上下文对象 有效载荷）
            // console.log(context,payload);
            const {_id,name,introduction,price,picture}=payload
            // const carts = context.state.carts
            // 深复制
            const carts=JSON.parse(JSON.stringify(context.state.carts))
            const index=carts.findIndex(item => item.id===_id)
            if(index === -1){
                carts.push({
                    id:_id,
                    name,
                    introduction,
                    price,
                    picture,
                    num:1,
                    checked:true,
                })
            } else{
                carts[index].num += 1
            }
            // actioon中不能直接更新数据，通过commit提交更改
            context.commit('MODIFY_CART',{carts})
        },
        // 删除
        removeCart(context,payload){
            const carts=context.state.carts.filter(prod=>prod.id !== payload.id)
            // actioon中不能直接更新数据，通过commit提交更改
            context.commit('MODIFY_CART',{carts})
        },
        // 改变数量
        changNumCart(context,payload){
            const carts=context.state.carts.map(prod=>{
                const copy={...prod}
                if(copy.id === payload.id){
                    copy.num = payload.value
                }
                return copy
            })
            // actioon中不能直接更新数据，通过commit提交更改
            context.commit('MODIFY_CART',{carts})
        },
        // 改变单个复选框状态
        changCheckedSingle(context,payload){
            const carts=context.state.carts.map(prod=>{
                const copy={...prod}
                if(copy.id === payload.id){
                    copy.checked = !copy.checked
                }
                return copy
            })
            context.commit('MODIFY_CART',{carts})
        },
        // 总复选框改变单个复选框
        changCheckedAll(context,payload){
            const carts=context.state.carts.map(prod=>{
                const copy={...prod}
                copy.checked=payload.checked
                return copy
            })
            context.commit('MODIFY_CART',{carts})
        },
        login({commit},payload){
            console.log(payload);
            commit('SET_TOKEN',payload)
        },
    },
}
export default shoppingCart