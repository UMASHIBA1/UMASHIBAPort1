import * as React from 'react';
import { Typography, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import ContentProps from '../../../../types/systems/contents/content';
import ColorObjController from '../../../../systems/Colors/color-obj-controller';


interface GalapagosProps {
    titleWord: ContentProps["word"];
    titleColor: ContentProps["wordColor"];
}

const styles = (theme:Theme) => createStyles({
    title: {
        margin: '20px 0 0 40px',
        fontSize: "56px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "36px",
            margin: '10px 0 0 20px'
        }
    }
})

type Props = GalapagosProps & WithStyles<typeof styles>;

class ContentTitle extends React.Component<Props> {
    render(){
        const colorObj = new ColorObjController();
        const titleColor = colorObj.specifiedColor(this.props.titleColor)[500];
        return(
            <span>
                <Typography style={{
                    color: titleColor
                }}
                className={this.props.classes.title}
                >
                    {this.props.titleWord}
                </Typography>
            </span>
        )
    }
}


export default withStyles(styles)(ContentTitle);
