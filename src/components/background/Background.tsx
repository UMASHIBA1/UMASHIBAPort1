import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import BackgroundSquare from './BackgroundSquare';
import { blue } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { reduxState } from '../../types/redux/reducer';
import { backgroundSquareProp } from '../../types/components/background/background-square';

interface ReduxStateProps {
    backgroundSquareProps: backgroundSquareProp[]
}

type Props = WithStyles<typeof styles> & ReduxStateProps;

const mapStateToProps = (state: reduxState):ReduxStateProps => {
    return {
        backgroundSquareProps: state.backgroundSquareProps.map((obj)=>(Object.assign({},obj)))
    };
};

const styles = (theme:Theme) :StyleRules => createStyles({
    background:{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue[300],
        overflow: "hidden"
    }
});

class Background extends React.Component <Props>{
    
    render(){
        return(
            <div className={this.props.classes.background}>
            {
                this.props.backgroundSquareProps.map(({
                    id,
                    colorName,
                    word,
                    sideLength,
                    zindex,
                    top,
                    left,
                })=>{
                    return(
                        <BackgroundSquare 
                        key={id} 
                        id={id} 
                        colorName={colorName} 
                        word={word} 
                        sideLength={sideLength}
                        zindex={zindex}
                        top={top} 
                        left={left}  />
                    )
                })
            }
            </div>
        );
    }
}

export default connect<ReduxStateProps>(mapStateToProps)(withStyles(styles)(Background));

