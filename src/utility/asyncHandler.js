const asyncHandler = (req,res,next)=>{
    return(req,res,next)=>{
        Promise.resolve(asyncHandler(req,res,next)).catch((error)=> next(error))
    }
}

export {asyncHandler}