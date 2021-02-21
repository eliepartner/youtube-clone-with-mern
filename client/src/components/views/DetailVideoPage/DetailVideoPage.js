import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';


function DetailVideoPage(props) {

    const videoId = props.match.params.videoId;
    const [Video, setVideo,] = useState([]);

    const videoVariable = {
        videoId: videoId
    }

    useEffect(() => {
        axios.post('/api/video/getVideo', videoVariable)
            .then(response => {
                if (response.data.success) {
                    setVideo(response.data.video)
                } else {
                    alert('Failed to get video Info')
                }
            })
    }, [])

    return (
        <Row>
            <Col lg={18} xs={24}>
                <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
                    <video style={{ width: '100%' }} src={`http://localhost:5000/${Video.filePath}`} controls></video>

                    <List.Item
                        actions={[]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={ Video.writer && Video.writer.image} />}
                            title={<a href="https://github.com/eliepartner">{Video.title}</a>}
                            description={Video.description}
                        />
                        <div></div>
                    </List.Item>

                </div>
            </Col>
        </Row>
    )
}

export default DetailVideoPage