import * as React from 'react';
import { Card, Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import CloseButton from './material/CloseButton';
import ContentTitle from './material/ContentTitle';
import BlogSentence from './BlogSentence';

const styles = (theme:Theme):StyleRules => createStyles({
    mainContent: {
        width: "100%",
        height: "100%",
        overflow: "auto"
    },
    root: {
        flexGrow: 1,
    }
});

type Props = WithStyles<typeof styles>;

class ContentMain extends React.Component<Props>{
    
    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.mainContent}>
                <ContentTitle titleWord={"Blog"} titleColor={"orange"}>
                </ContentTitle>
                <BlogSentence></BlogSentence>
                <CloseButton contentType={"Blog"}>
                </CloseButton>
            </Card>
        )
    }

}

export default withStyles(styles)(ContentMain);
