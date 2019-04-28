import * as React from 'react';
import { Typography, Theme } from '@material-ui/core';
import { StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const styles = (theme:Theme): StyleRules => createStyles({
    root: {
        margin: "auto",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: 24,
        color: red[50],
        height: 100,
        width: 200,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        // verticalAlign: "middle",
        // textAlign: "center"
    }
});

interface Props extends WithStyles<typeof styles>{};

class BigTypo extends React.Component<Props>{
    render(){
        return(
            <Typography className={this.props.classes.root}>
            UMASHIBA
            </Typography>
        );
    }
}

export default withStyles(styles)(BigTypo);
