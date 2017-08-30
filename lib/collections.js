Images = new Mongo.Collection("images");

//set up security on IMages collection
Images.allow({
	insert:function(userId, doc){
		console.log("testing security on image insert");
		if (Meteor.user()){ // they are logged in
			// force the image to be owned by the user
			if(userId != doc.createdBy){// the user is messing about
				return false;
			}
			else{// the user is logged in, the image has the correct
				return true;
			}
		}
		else{// user not logged in
			return false;
		}
	},
	remove:function(userId,doc){
		return true;
	}
});