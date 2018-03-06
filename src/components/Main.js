import React from 'react';
import { connect } from 'react-redux';

//Components
import Header from './Header'
import Options from './Options'
import AddOption from './AddOption'


class MainComponent extends React.Component{
    state = {
        options: ['Shahan', 'Rayhan', 'Rahim', 'Tajim', 'React', 'React Dom', 'Redux', 'Redux Saga', 'EcmaScript', 'ESLint']
    }


    handleAddOption = (option) => {
        if(!option) return 'Please Enter A Item';
        
        this.setState( (prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    
    handleDeleteItem = (option) => {
        this.setState(({
            options: this.state.options.filter((value, index) => {
                return option !== index
            })
        }))
    }

    handleEditItem = (option, key) => {
        const updateData = this.state.options.slice();
        updateData[key] = option
        // console.log(updateData)
        this.setState({
            options: updateData
        })
    }


    render(){
        const title = "Boilerplate";
        const subtitle = "Created By Shahan";
        return(
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                
                <Options 
                    handleAddOption={this.handleAddOption}
                    Options={this.state.options}
                    handleDeleteItem={this.handleDeleteItem}
                    handleEditItem={this.handleEditItem}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const Main = connect(mapStateToProps)(MainComponent);

export default Main;