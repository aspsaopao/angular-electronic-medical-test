import { EleType, DocumentFormat } from './enum'

/**
 * 病历消息投递基础模型
 *
 * @interface NgEleType
 */
declare interface NgEleType<T = null> {

  /**
   * 
   * 消息类型
   * @type {EleType}
   * @memberof EleType
   */
  messageType: EleType;

  /**
   * 数据信息
   * @type {T}
   * @memberof data
   */
  message: T;
}
/**
 * 打开文件 对应EleType.openDocument
 */
declare interface OpenDocument {
  /**
   * 病历文件信息
   */
  documentContent: string | File | Blob | ArrayBuffer,
  /**
   * 文件类型
   */
  type: DocumentFormat
}
declare interface Itest {
  test(): void;
}
declare global {
  /**
   *
   *
   * @interface Window
   */
  interface Window {
    ngEleType: NgEleType<any>;
    initDocument(): void;
  }
}
/**
 * 初始化配置
 */
export interface OptionsEx {
  /**
   * 文件信息
   */
  documentContent?: File | Blob | ArrayBuffer | string;
  /**
   * 文件类型
   */
  type?: DocumentFormat;
  /**
   * 宽度
   */
  width?: string;
  /**
   * 高度
   */
  height?: string;
  /**
   *左边要素目录
   * */
  elementList?: ElementItem[];
  /**
   *患者历史病历列表
   * */
  patientMedicalList?: PMItem[];
  /**
   *是否显示代码
   * */
  isShowCode?: boolean | false;
  /**
   * 模板对应的患者病历字段
   * */
  richEditValueData?: EditValueItem[];
}
/**
 * 模板捆绑病历字段
 */
export interface EditValueItem {
  /**
   *病历捆绑id
   * */
  id: string;
  /**
   *捆绑对应值
   * */
  value: string;
}
/**
 * 要素列表
 */
export interface ElementItem {
  /**
   * 要素id
   * */
  id?: string;
  /**
   * 要素名称
   * */
  name: string;
  /**
   *子集要素
   * */
  children?: ElementItem[];
}
/**
 * 病历列表子项
 */
export interface PMItem {
  /**
   *病历id
   * */
  medicalId: string;
  /**
   *病历名称
   * */
  medicalName: string;
  /**
   *添加时间
   * */
  createtime: string;
}
/**
 * 文件保存 对应Eletype.save
 */
export interface SaveFiles {
  /**
   *文件信息
   * */
  file: File;
  /**
   *病历模板捆绑要素等字段ID
   * */
  fileIds: string[];
}
declare var ngEleType: NgEleType<any>;
declare var itest: Itest;
