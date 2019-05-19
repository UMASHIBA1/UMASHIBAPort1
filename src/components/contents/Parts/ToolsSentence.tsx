import * as React from 'react';
import { Typography, createStyles, Theme, Link } from '@material-ui/core';
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
    warningLine: {
        fontSize: "14px",
        marginLeft: "56px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            marginLeft: "20px"
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
                    color: colorObj.specifiedColor("pink")[500]
                }}>
                    まともに使える言語、FW、開発ツール
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                なし？泣(´;ω;｀)
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("deepOrange")[500]
                }}>
                    少しは使える言語、FW、開発ツール
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                日本語、JavaScript,Python,Django,VSCode
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("deepPurple")[500]
                }}>
                    おいおい大丈夫か?レベル
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.multiLine}`}>
                英語,GitHub,heroku,React,Redux,Heroku,TypeScript             
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(AboutMeSenetence);
