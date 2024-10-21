const {body ,validationResult} = require("express-validator")

exports.genre_create_get = (req,res,next) =>{
    res.render( "genre_form" ,{title : "Create Genre"});
};

exports.genre_create_post = [
    body("name","Genre name must be contain at least 3 characters")
    .trim()
    .isLength({min : 3})
    .escape(),

    asyncHandler(async (req,res,next) => {

    const error = validationResult(req);

    const genre = new Genre({name : req.body.name});

    if (!errors.isEmpty()) {
        
        res.render("genre_form" , {
        title : "Create Genre",
        genre : genre,
        errors : errors.array(),
        });
        return ;
    } else {

        const genreExists = await Genre.findOne({name : req.body.name
})
     .collation({locale : "en", strength : 2})
     .exec();
     if (genreExists) {
        res.redirect(genreExists.url);
     } else {
        await genre.save();

        res.redirect(genre.url);
      }
    }
  }),
];