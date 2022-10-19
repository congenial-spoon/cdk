module.exports = {
  icon: true,
  typescript: true,
  // ref: true,
  ignoreExisting: true,
  // svgProps: {
  //   viewBox: '0 0 1024 1024',
  //   fill: 'currentColor',
  // },
  // expandProps: 'end',
  ext:"tsx",
  outDir: './src/icons',
  template: (variables, {tpl}) => {
    return tpl`
${variables.imports};

${variables.interfaces};
import IconBase, {IconBasePropsType} from './IconBase';
const SvgIcon = (${variables.props}) => (
  ${variables.jsx}
);
const ${variables.componentName} = React.forwardRef<SVGSVGElement,Omit<IconBasePropsType,'name'>>((props, ref)=>{
    return (
    <IconBase name='${variables.componentName}' {...props} ref={ref}>
      <SvgIcon/>
    </IconBase>
    )
})
${variables.exports};
`
  }
};
