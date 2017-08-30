Meteor.startup(function(){
	if (Images.find().count() == 0){

		for (var i=1;i<23;i++){
			Images.insert(
				{
				img_src:"img_"+i+".jpg",
				img_alt:"some laptops on a table"+i 
				}
			);
		}//end of for insert images

		//count the images!
		console.log("startup.js says: "+Images.find().count());
	}// end of if have no images
});