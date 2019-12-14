module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "index.bundle.js"
	},
  module: {
    rules: [
    {
        test : /\.html$/ , 
        use: [ "html-loader" ]
    },
    {
        test:/\.css$/,
        use:['style-loader','css-loader']
    },
    {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
       'file-loader',
       ],
   },
   ]
}
}
