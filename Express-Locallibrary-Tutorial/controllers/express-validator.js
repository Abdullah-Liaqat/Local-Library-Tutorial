// express-validator se body function & validationResult function ko import kiya jata hai.
// Body function validation ko define kiya jaata hai.
// ValidationResult mein define hui validation ko handle kiya jaata hai.
// Dono Function ka use request handling ke liye hota hai.
const {body , validationResult } = require("express-validator");

[ // Below Code Body function request body mein name field mein name check karta hai.
  // Empty Name = Agar user ne name field ko fill nahi kiya toh Yeh error show hoga.
  // trim () = Matlab agar user ne start & end mein extra space ko remove karta hai.
  // isLength({min: 1}) = Matlab Yeh ke text ki minimum limit 1 word hai agar yeh bhi nahi likhte toh bhi error show hoga.
  // escape() = Matlab Malicious code se protection ke liye useful hai.
    body("name","Empty name").trim().isLength({min : 1}).escape(),
];

[//body = Matlab age field mein age likhna.
 //body(Invalid age) = Matlab jab age ko galat likha jayega toh custom error show hoga.
 // Optional = Matlab agar user is ke zariye se request karta hai toh warna agar na bhi toh koi farq nahi padta.
 // isISO8601 = Matlab Calender form YY-MM-DD main hoga.
 // toDate = Matlab yeh ke Date ki form mein hoga JS uske baad mein object ki form mein convert karega.
 // Example = Input : "2024-10-14" , Output = Date object representing 2024-10-14.

    body("age", "Invalid age")
    .optional({values : "falsy"})
    .isISO8601()
    .toDate,
];
[ // body = Matlab body field mein name likhna hai.
  // .trim = Extra Spaces Finish From Start to End.
  // .isLength = Matlab Minimum Length of Name Letters.
  // .withMessage= Agar Agar above function ka Argument hit nahi hua toh "Name Empty" error show hoga.
  // .isAlpha = Means Only Alphabet letter allowed.(Special Character & number are not allowed.)
  // .withMessage = Above code obey nahi hua toh "Name must be alphabet letters" error show hoga.
    body("name")
    .trim()
    .isLength({min :1})
    .withMessage("Name Empty")
    .isAlpha()
    .withMessage("Name must be alphabet letters."),
];


// Async Handler ek module hai jo Asynchronously work karta hai.(Code Flow Nahi Rokta).
// validationResult = Request ki validation ko check karta hai ke validation of request mein koi error toh nahi.
// agar error nahi hai toh code execution ho jati hai.
// agar error hota hai toh !error.isEmpty ko error send hota hai aur woh usse handle karta hai.
asyncHandler(async (req,res,next) =>{
 const error = validationResult(req);
 
   if (!error.isEmpty()) {

   }
   else {

   } 

}); 