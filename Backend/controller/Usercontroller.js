const User=require('../model/Usermodel');

module.exports.addToLikedMovie=async(req,res)=>{
    try {
        const{email,data}=req.body;
        const user=await User.findOne({email});
        if(user){
            const { likedMovies }=user;
            const MoviesAlreadyLiked = likedMovies.find(({id})=>id===data.id);
            if(!MoviesAlreadyLiked){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies:[...user.likedMovies,data]
                },
                {new:true}
                )
            }else{
                return res.json({msg:"movies already added to the liked list"})
            }
        }else await User.create({email,likedMovies:[data]})
        return res.json({msg:"movie added successfully"})
    } catch (error) {
        
    }
}

module.exports.getLikedmovies=async(req,res)=>{
    try {
        const {email}=req.params;
        const user = await User.findOne({ email });
        if(user){
            res.json({msg:"success",movies:user.likedMovies})
        }else return res.json({msg:"user with given email is not found"})
    } catch (err) {
        return res.json({msg:"error fetching movie"})
    }
}

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Movie not found." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
            likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};