import { createServer, Model } from "miragejs";

export const setupServer = () => {
    let server = createServer({
        models: {
            todos: Model
        },
        routes() {
            this.get('/api/todos',(schema) => {
                return schema.todos.all()
            })
            this.post('/api/todos',(schema, req) => {
                const payload = JSON.parse(req.requestBody)
                return schema.todos.create(payload)
            })
            this.post('api/updateTodo',(schema, req) => {
                const payload = JSON.parse(req.requestBody)
                const currentTodo = schema.todos.find(payload.id)

                currentTodo.update(payload)
            })
        }
    })}
