const express = require('express')
const cors = require('cors')
const _ = require('lodash')

const app = express()
app.use(cors())

let root = {
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                myname: {
                    type: "dir",
                    children: {
                        "filea.txt": {
                            type: "file"
                        },
                        "fileb.txt": {
                            type: "file"
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file"
                                        }
                                    }
                                }
                            }
                        }
                    },

                }
            }
        }
    }
}

app.get('/path', (req, res) => {
    let name = 'root'
    let type = root.type
    let children = _.map(root.children, (value, key) => key)
    res.json({
        name,
        type,
        children
    })
})

app.get('/path/:mypath', (req, res) => {
    let path = _.split(req.params.mypath, '-')
    let structurePath = []
    _.each(path, (element) => {
        structurePath.push('children')
        structurePath.push(element)
    })

    let content = _.get(root, structurePath)

    let name = _.last(path)
    let type = content.type
    let children = _.map(content.children, (value, key) => key)
    res.json({
       name,
       type,
       children
    })
})

app.listen(8080, () => {
    console.log('server listing on port 8080')
})