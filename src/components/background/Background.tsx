import * as React from 'react';
import { Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import BackgroundSquare from './BackgroundSquare';
import { blue } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { reduxState } from '../../types/redux/reducer';
import { backgroundSquareProp } from '../../types/common/background-square';

interface ReduxStateProps {
    backgroundSquareProps: backgroundSquareProp[]
}

const mapStateToProps = (state: reduxState):ReduxStateProps => ({
        backgroundSquareProps: state.backgroundSquareProps.map((obj: backgroundSquareProp): backgroundSquareProp=>(Object.assign({},obj)))
});

const styles = (theme:Theme) :StyleRules => createStyles({
    background:{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blue[300],
        position: "fixed",
        top:0,
        left:0
    }
});

type Props = WithStyles<typeof styles> & ReduxStateProps;

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

export default connect(mapStateToProps)(withStyles(styles)(Background));
