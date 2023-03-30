    function getBotResponse(input) {
        if (input == "hello") {
            return "Hello there!";
        } else if (input == "goodbye") {
            return "Talk to you later!";
          
        } 
        else if(input == "what causes mental health disorders")
        {
            return "childhood abuse,trauma or neglect,social isolation,discrimination,racism.";
        }
        else if (input == "What are the symptoms of mental health disorders") {
            return"Anxiety,Bipolar,Clinical disorders,these symptoms greatly affect your mood, thinking and ability to interact with others.";}
            else if (input == "What are the signs of mental illness") {
                return "Feeling low,redcued ability to concentrate,tiredness,problem with sleeping.";
            } 
            else {
            return "Try asking something else!";
        }
    
    }