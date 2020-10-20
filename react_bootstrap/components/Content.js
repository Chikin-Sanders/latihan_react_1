import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div class="container text-center">
                <h3>What We Do</h3><br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed interdum est lorem, in consectetur ipsum tincidunt at. 
                    Nullam vitae pharetra leo. In elit elit, finibus gravida eros ac, mattis venenatis orci. 
                    Suspendisse a arcu dui. Suspendisse sapien lacus, sollicitudin eget mauris in, condimentum accumsan magna. 
                    Morbi imperdiet, nunc et iaculis pretium, massa leo mollis orci, vitae placerat ex est eu enim. 
                    Donec feugiat viverra porta. Nam ultrices molestie massa non molestie. 
                    Ut viverra nisi pellentesque metus rutrum dignissim. 
                </p>
                <div class="row">
                    <div class="col-sm-4">
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"/>
                            <p>Current Project</p>
                    </div>
                    <div class="col-sm-4">
                        <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style={{width:"100%"}} alt="Image"/>
                            <p>Project 2</p>    
                    </div>
                    <div class="col-sm-4">
                        <div class="well">
                            <p>Some text..</p>
                        </div>
                        <div class="well">
                            <p>Some text..</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;