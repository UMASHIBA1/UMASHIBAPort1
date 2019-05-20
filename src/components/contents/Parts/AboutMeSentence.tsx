import * as React from 'react';
import { Typography, createStyles, Theme } from '@material-ui/core';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';
import ColorObjController from '../../../systems/Colors/color-obj-controller';

const styles = (theme:Theme):StyleRules => createStyles({
    font: {
        fontSize: "36px",
        margin: "24px 0 0 56px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            margin: '10px 0 0 20px'
        }
    },
    oneLine: {
        lineHeight: "1.6em"
    },
    multiLine: {
        lineHeight: "1.8em"
    },
    subTitle: {
        fontWeight: "bold"
    }
})

type Props = WithStyles<typeof styles>;

class AboutMeSenetence extends React.Component<Props> {
    
    render(){
        const colorObj = new ColorObjController();
        return(
            <div>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("red")[500]
                }}>
                    ハンドルネーム: 
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                   UMASHIBA
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("orange")[500]
                }}>
                    趣味: 
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                    読書、プログラミング
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("cyan")[500]
                }}>
                一言: 
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.multiLine}`}>
                    どうも、UMASHIBAです。<br/>
                    いつもはウェブサービスとか作ってる都内の大学生です。<br/>
                    今年の目標はインターンに行って技術を学んでくること！
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(AboutMeSenetence);
