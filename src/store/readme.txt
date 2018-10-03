1. Provider - обёртка React-приложения, так мы подключаем Redux к проекту
<Provider store={store}>
  <Router><App/></Router>
</Provider>,

2. У этого компонента Provider есть атрибут store, который принимает Redux-функцию createStore, которая создаёт централизованное хранилище всего приложения.

3. Функция createStore принимает 2 параметра reducers и enhancer.
- enhancer нужен для работы ReduxDevTools и прочего

4. reducers - это редукторы, в этом файле описывается логика, изменяющая состояние приложения. Так же он хранит в себе начальное соттояние всего приложения initialState

5. actions - функции, которые содержат keyword для отслеживания в reducers, если type совпадает c keyword в case, то state обновиться
