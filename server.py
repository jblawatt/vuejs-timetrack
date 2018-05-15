import bottle


@bottle.route('/node_modules/<filepath:re:.*>')
def get_node_module(filepath):
    return bottle.static_file(filepath, root="node_modules/")


@bottle.route('/')
def get_index():
    return bottle.static_file('index.html', '.')


@bottle.route('/todo.js')
def get_todo():
    return bottle.static_file('todo.js', '.')


@bottle.route('/api/items', method=['GET'])
def get_items():
    return []

# @bottle.route('/api/items/<id:string>/')


if __name__ == '__main__':
    bottle.run(reloader=True)
