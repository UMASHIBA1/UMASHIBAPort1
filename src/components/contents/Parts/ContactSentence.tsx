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
                    color: colorObj.specifiedColor("lightGreen")[500]
                }}>
                    メールアドレス: 
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                   umashiba1 # gmail.com
                </Typography>
                <Typography className={`${this.props.classes.warningLine}`}>
                    ※#を@に置き換えてください。
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("lightBlue")[500]
                }}>
                    Twitter 
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                    <Link href={'https://twitter.com/UMASHIBA'}>
                        @UMASHIBA
                    </Link>
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("blueGrey")[500]
                }}>
                    GitHub
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.multiLine}`}>
                    <Link href={'https://github.com/UMASHIBA1/'}>
                        UMASHIBA1
                    </Link>
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(AboutMeSenetence);
