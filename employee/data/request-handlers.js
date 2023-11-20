import userSchema from "./schema/user.schema.js";
export async function uploadFile(req,res){
    try {
        let {name,
            email,
           
            date,
            dis,
          
            state,
            image,
            resume,
          
            phn,
            password}=req.body
        
        let result=await fileSchema.create({
            name,
            email,
           
            date,
            dis,
          
            state,
            image,
            resume,
          
            phn,
            password
        })
        if(result){
            return res.json("Data successfully uploaded")
        }
        return res.status(500).send ("error occured")
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
    }
}