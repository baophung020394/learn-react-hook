React Hook

1. Hook useState():

- Giúp functional component có thể sử dụng đc state
- Là 1 giá trị hoặc là 1 callback functional
- output là mảng gồm 2 phần tử
  syntax: const [name, setName] = useState('Hau');

2. Array destructoring syntax:
   // before
   const array = ['easy', 'frontend'];
   const a = array[0];
   const b = array[1];
   // Array destructoring
   const [a, b] = ['easy', 'frontend'];

- Initial State chỉ dùng cho lần đầu, những lần sau bị bỏ rơi
  solotion
  dùng callback function Initial State và nó chỉ chạy 1 lần k re render lại
  function ColorBox(){
  const [color, setColor] = useState(() => {
  const initColor = getComplicatedColor();
  return initColor;
  })
  }

3. useEffect
   Trường hợp 1 k có dependencies thì sẽ luôn luôn được chạy sau mỗi lần render
   side effect
   Mounting (render lan đầu tiên )

- rendering
- run useEffect
- k run cleanup
  Updating
- rendering
- run `useEffect() cleanup` nếu dependencies thay dổi
- run `useEffect()` nếu dependencies thay đổi

Unmouting

- run `useEffect() cleanup`

Trường hợp có dependencies rỗng thì sẽ chạy đúng 1 lần sau lần render đầu tiên

- Effect chạy đúng 1 lần => ComponentDidmount
- Clean up chạy đúng 1 lần => ComponentUnmount

Trường hợp có dependencies có data
phụ thuộc vào data ( state ) có thay đổi thì mới chạy useEffect
useEffect là Synchronous function

0. hoisting
   Hoisting là hành động mặc định của Javascript, nó sẽ chuyển phần khai báo lên phía trên top Trong Javascript, một biến (variable) có thể được khai báo sau khi được sử dụng
1. callback

- được thực thi sau khi một function khác được thực thi xong ( bất đồng bộ )

2. var
3. let
4. const
5. promise
6. async/await
7. cookie là gì?
8. session là gì?
9. tham chiếu/tham trị
10. for
11. forEach

- Phương pháp này có thể giúp bạn lặp qua các item trên mảng.

12. map

- tạo ra một array mới bằng việc xử lý những item của array cũ bằng phương thức của chúng ta xử lý.

13. filter

- Phương thức này nhằm tạo ra mộ mảng mới với các điều kiện

14. find
15. reduce
16. life cycle
17. includes

- check sự tồn tại của item nào trong mảng - output: boolean

18. sort

### Reactjs Component Hook

# Mounting ( được add vào trong DOM ) - chạy đúng 1 lần

- Sau khi render chạy componentDidMount
- componentDidMount gọi API

# Updating (chạy nhiều lần)

- Khi props/state thay dổi thì sẽ trigger lại hàm render()
  -render xong thì componentDi đUpate

# Unmounting ( được remove khỏi DOM) - chạy đúng 1 lần

- componentWillUnMount
- Reset dữ liệu trên redux

# render()

# Container component

- Có dữ liệu nhưng k binding đc nên cần Presentational

# Presentational component

- Binding đc nhưng k có dữ liệu nên cần Container

# Props

- Dữ liệu dc truyền từ Comp Cha xuống Con. Và dữ liệu này không thay đổi đc ở thằng Con (READ-ONLY)

# Prop Type Checking

nếu có isRequired thì k cần khai báo defaultProps
nếu không có .isRequired thì phải khai báo defaultProps

# State

- State được tạo ra và quản ly bởi component hiện tại
- State được dùng cho những dữ liệu có khả năng sẽ thay đổi

# Khác nhau giữa props và state

- Props: Truyền từ cha xuống con => thằng con k thay đổi đc giá trị props
- State: Là của bản thân component đó và có thể thay đổi đc
- Truyền dữ liệu giữa ~ component ngang hàng thì đẩy lên component Cha xử lý
- Truyền dữ liệu giữ các trang khác nhau thì dùng Redux

# Life cycle class component

- Mounting, Updating, Unmounting

1. Mouting ( Được tạo ra )

- Gọi constructor -> render -> componentDidMount
- constructor: khai báo state, super(props), định nghĩa properties của component
- componentDidMount: gọi API và cập nhật state, biến đổi dữ liệu, gửi tracking page view( GA, FacebôkPixel,...)

2. Updating ( Cập nhật thay đổi)

- Gọi New props/setState/forceUpdate -> render -> componentDidUpdate
- componentDidUpdate: xảy ra khi và chỉ khi props hoặc state thay đổi hoặc dùng forceUpdate để buộc rerender
- componentDidUpdate: hạn chế dùng. Chỉ dùng nếu muốn handle update component khi click nút back mà trên url có query params

3. Unmounting ( Hủy bỏ cái component đó đi )

- Gọi componentWillUnmount
- componentWillUnmount: dùng để clear Interval hoặc setTimeout hoặc reset dữ liệu redux trên store

# Custom Hook

- Tự định nghĩa ra
- Sử dụng những cái Hook khác
- cách đặt tên với tiền tố là : use. Ví dụ useClock(), useClickOutSide()...
- Đối với functional component return về JSX. Đối với custom Hook thì return về dữ liệu

# useCallback trả về 1 callback áp dụng kỹ thuật memoization

# useMemo trả về 1 giá trị áp dụng kỹ thuật memoization

# useReducer
# useLayoutEffect
# Routing

- Router: Component bao bọc tất cả các component khác sử dụng routing
- Route: render component khi match với path
- Switch chỉ render route đầu tiên match path
- Redirect
- Link
- Navlink Giống như Link nhưng có thêm activeClassName
- exact mặc định là false. Khi có exact thì path phải bằng với url

# Routing Hook

- useHistory : di chuyển trang này sang trang khác bằng code
- useLocation : lấy thông tin location hiện tại
- useParams : lấy thông tin path params
- useRouteMatch : nested routing

# Redux

- Đi đúng chiều (uni-directional data flow - đi đùng 1 chiều)
- View -> Actions (Objects) -> Reducer ( biến state cũ sang state mới dựa vào infor actions gửi lên )

# SCSS + BEM

.card {
&**title{}
&**description{}
}

<div className="card">
  <h2 className="card__title"></h2>
  <p className="card__description"></p>
</div>

# Material style

## Folder structure

```
src
|__ Api
|__ components ( shared components between features) - dùng để chia sẽ nhiều components vớin hau
|   |__ Loadinhg
|       |__ index.jsx
|       |__ style.scss
|
|__ features - những tính năng như sản phẩm, comment, giỏ hàng....
|   |__ Todo
|       |__ components ( components of feature Todo)
|       |__ pages (pages of feature Todo)
|       |__ index.jsx (entry point of feature Todo)
|
|__ App.js
```

# Form Module structure

- Form validate: Yup
- Helper: Validation Resolver
- Error Message: ErrorMessage
  npm i --save react-hook-form yup @hookform/resolvers @hookform/error-message

# React Hook Form

# formik

# react-hook-form.com

# api.ezfrontend.com

https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#api-endpoints

# Phân tích Giỏ hàng

1. Router

- /products
- /products/:productId
- - - notfound

# Product Search Page: Component tree

Box (full section)
|** Container (fixed width content)
|** Grid container (flexbox container) -- row
|** Grid item (left column) -- col-4
| |** ProductFiltersForm
|
|** Grid item (right column) -- col-8
|** ProductSortOptions
|** ProductList
|** Pagination
{
data:[],
pagination: {
page: 1,
total: 12,
limit: 10,
}
}
skeletons ( loading có nền giống fb, youtube)
intl.NumberFormat (format tiền tệ)
total trang = Math.ceil(121/10)

# Phân tích cách hiển thị filter

```js
const filters = {
  isPromotion: true,
  salePrice_lte: 100,
  salePrice_gte: 100,
  page,
  limit,
};
```

FILTER_LIST

- id: number
- getLabel: (filters) => string
- isActive: (filters) => true/false
- isVisible: (filters) => true/false
- isRemovable: boolean
- onRemove: func
- onToggle: func

# Chi tiết sản phẩm
- nested routing

# IIFE trong Javascript
https://youtu.be/qjuvLUiQrVs
# serverless.yml ( của AWS )

- plugin chạy trên nodejs
- Chạy k cần máy chủ ( config những cái có sẵn của serverless )
- function javascript
- Stack ( ổ cứng lưu dữ liệu online )
- Cần 1 stackName
- Tạo stack trên CloudFormation
- Kết nối thông qua stackname
- Khai báo 1 cái resource
- khai báo 1 lamda function

- chạy trên nodejs phải sử dụng require ( 1 kiểu khai báo của Common JS https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch11s03.html)
- esmodule
- cjs esm amd umd
- webpack, rollup, parcel ( dùng để build npm )
- CNAMEs: là 1 bí danh tạo từ cái domain
- stack kết hợp với nhiều thứ ( all services )
- memoriSize: cấp dung lượng bộ nhớ ( trống nhiều thì nhanh )
- timeout: thời gian xử lý
- events: các config http
- schedule: thiết lập ngày giờ để nó tự chạy
- concurrency: số lần chạy
- http response: trả về cho browser hiểu
- webpack:

# Cách tạo project vuejs
vuex, eslint, 
vue  babel target es5
progressive web app
service worker
