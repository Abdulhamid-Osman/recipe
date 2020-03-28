import 'whatwg-fetch';

// class HttpService{
    // getRecipes = ()=>{
    //     fetch('http://localhost:4200/api/recipes')
    //     .then(res=>{
    //         console.log(res.json());
    //     })
    // }
// }
class HttpService{
    getRecipes=()=>{
        let promise = new Promise ((resolve, reject) =>{
            fetch('http://localhost:4200/api/recipes')
            .then(res=>{
                resolve(res.json());
            })
        })
        return promise;
    }
}
export default HttpService;
//     getRecipes = ()=>{
//         //called first
//         let promise = new Promise ((resolve, reject)=>{
//             //called 2
//             fetch('http://localhost:4200/api/recipes')
//         .then(res =>{
//             //called 4th
//             resolve(res.json());
//         })
//         })
//         //called 3
//         return promise;
        
//     }
// }

