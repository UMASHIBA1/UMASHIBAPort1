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

class BlogSentence extends React.Component<Props> {
    
    render(){
        const colorObj = new ColorObjController();
        return(
            <div>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("green")[500]
                }}>
                    Qlita
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                <Link href={'https://qiita.com/umashiba'}>
                    UMASHIBA/Qlita
                </Link>
                </Typography>
                <Typography className={`${this.props.classes.subTitle} ${this.props.classes.font}`} style={{
                    color: colorObj.specifiedColor("blueGrey")[500]
                }}>
                    はてなブログ
                </Typography>
                <Typography className={`${this.props.classes.font} ${this.props.classes.oneLine}`}>
                    <Link href={'https://umashiba.hatenablog.com/'}>
                        UMASHIBAブログ
                    </Link>
                </Typography>
            </div>
        )
    }
}


export default withStyles(styles)(BlogSentence);
