//routes.js
const url = require('url');
let fs = require('fs');
html = {
    render(path, response) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('file not found');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
}
module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let path = url.parse(request.url).pathname;
        switch (path) {
            case '/index':
                html.render('./index.html', response);
                break;
            case '/education':
                html.render('./education.html', response);
                break;
                case '/experience':
                    html.render('./experience.html', response);
                    break;
                    case '/hobbies':
                        html.render('./hobbies.html', response);
                        break;
            default:
                response.writeHead(404);
                response.write('Route not found');
                response.end();
    }
}

}
