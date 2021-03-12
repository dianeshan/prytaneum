import React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ResponsiveDialog from 'components/ResponsiveDialog';
import ReportSummary from 'domains/Feedback/ReportSummary';
import { formatDate } from 'utils/format';
import { Report } from '../types';

interface Props {
    reports: Report[];
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    li: {
        padding: 10,
    },
    listSubheader: {
        fontSize: 20,
        color: theme.palette.common.black,
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
        listStyle: 'none',
    },
    listText: {
        color: theme.palette.grey[700],
    },
}));

export default function ReportList({ reports }: Props) {
    const classes = useStyles();
    const [reportSelected, setReportSelected] = React.useState<Report | null>(null);

    return (
        <div>
            <List className={classes.root}>
                {reports.map((report) => (
                    <li key={report._id}>
                        <Divider />
                        <ListSubheader disableSticky className={classes.listSubheader} color='primary' component='div'>
                            {`Date Submitted: ${formatDate(new Date(report.meta.createdAt))}`}
                        </ListSubheader>
                        <ListItem
                            id={report._id}
                            button
                            onClick={() => {
                                setReportSelected(report);
                            }}
                        >
                            <ListItemText
                                className={classes.listText}
                                primary={`${report.description.substr(0, 200)} ...`}
                            />
                        </ListItem>
                    </li>
                ))}
            </List>
            <ResponsiveDialog open={Boolean(reportSelected)} onClose={() => setReportSelected(null)}>
                {reportSelected ? (
                    <Container maxWidth='sm' style={{ padding: 20 }}>
                        <ReportSummary
                            report={reportSelected}
                            callBack={() => {
                                setReportSelected(null);
                            }}
                        />
                    </Container>
                ) : (
                    <></>
                )}
            </ResponsiveDialog>
        </div>
    );
}
