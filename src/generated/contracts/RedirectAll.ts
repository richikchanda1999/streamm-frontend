/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RedirectAllInterface extends utils.Interface {
  functions: {
    "_receivers(uint256)": FunctionFragment;
    "afterAgreementCreated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementTerminated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "afterAgreementUpdated(address,address,bytes32,bytes,bytes,bytes)": FunctionFragment;
    "beforeAgreementCreated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementTerminated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "beforeAgreementUpdated(address,address,bytes32,bytes,bytes)": FunctionFragment;
    "currentReceiver(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_receivers"
      | "afterAgreementCreated"
      | "afterAgreementTerminated"
      | "afterAgreementUpdated"
      | "beforeAgreementCreated"
      | "beforeAgreementTerminated"
      | "beforeAgreementUpdated"
      | "currentReceiver"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_receivers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementCreated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementTerminated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementUpdated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementCreated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementTerminated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementUpdated",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentReceiver",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "_receivers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentReceiver",
    data: BytesLike
  ): Result;

  events: {
    "FlowCreated(address,int96)": EventFragment;
    "FlowDeleted(address,int96)": EventFragment;
    "FlowUpdated(address,int96)": EventFragment;
    "ReceiverChanged(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FlowCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlowDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlowUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReceiverChanged"): EventFragment;
}

export interface FlowCreatedEventObject {
  receiver: string;
  flowRate: BigNumber;
}
export type FlowCreatedEvent = TypedEvent<
  [string, BigNumber],
  FlowCreatedEventObject
>;

export type FlowCreatedEventFilter = TypedEventFilter<FlowCreatedEvent>;

export interface FlowDeletedEventObject {
  receiver: string;
  flowRate: BigNumber;
}
export type FlowDeletedEvent = TypedEvent<
  [string, BigNumber],
  FlowDeletedEventObject
>;

export type FlowDeletedEventFilter = TypedEventFilter<FlowDeletedEvent>;

export interface FlowUpdatedEventObject {
  receiver: string;
  flowRate: BigNumber;
}
export type FlowUpdatedEvent = TypedEvent<
  [string, BigNumber],
  FlowUpdatedEventObject
>;

export type FlowUpdatedEventFilter = TypedEventFilter<FlowUpdatedEvent>;

export interface ReceiverChangedEventObject {
  receiver: string;
  tokenId: BigNumber;
}
export type ReceiverChangedEvent = TypedEvent<
  [string, BigNumber],
  ReceiverChangedEventObject
>;

export type ReceiverChangedEventFilter = TypedEventFilter<ReceiverChangedEvent>;

export interface RedirectAll extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RedirectAllInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _receivers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    afterAgreementCreated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterAgreementTerminated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterAgreementUpdated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    beforeAgreementCreated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementTerminated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    beforeAgreementUpdated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    currentReceiver(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;
  };

  _receivers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  afterAgreementCreated(
    _superToken: PromiseOrValue<string>,
    _agreementClass: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    _ctx: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterAgreementTerminated(
    _superToken: PromiseOrValue<string>,
    _agreementClass: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    _ctx: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterAgreementUpdated(
    _superToken: PromiseOrValue<string>,
    _agreementClass: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    _ctx: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  beforeAgreementCreated(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementTerminated(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  beforeAgreementUpdated(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  currentReceiver(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      startTime: BigNumber;
      receiver: string;
      flowRate: BigNumber;
    }
  >;

  callStatic: {
    _receivers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementCreated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementTerminated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    afterAgreementUpdated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementCreated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementTerminated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    beforeAgreementUpdated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    currentReceiver(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        startTime: BigNumber;
        receiver: string;
        flowRate: BigNumber;
      }
    >;
  };

  filters: {
    "FlowCreated(address,int96)"(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowCreatedEventFilter;
    FlowCreated(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowCreatedEventFilter;

    "FlowDeleted(address,int96)"(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowDeletedEventFilter;
    FlowDeleted(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowDeletedEventFilter;

    "FlowUpdated(address,int96)"(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowUpdatedEventFilter;
    FlowUpdated(
      receiver?: PromiseOrValue<string> | null,
      flowRate?: null
    ): FlowUpdatedEventFilter;

    "ReceiverChanged(address,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      tokenId?: null
    ): ReceiverChangedEventFilter;
    ReceiverChanged(
      receiver?: PromiseOrValue<string> | null,
      tokenId?: null
    ): ReceiverChangedEventFilter;
  };

  estimateGas: {
    _receivers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    afterAgreementCreated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterAgreementTerminated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterAgreementUpdated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    beforeAgreementCreated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementTerminated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beforeAgreementUpdated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentReceiver(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _receivers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    afterAgreementCreated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementTerminated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterAgreementUpdated(
      _superToken: PromiseOrValue<string>,
      _agreementClass: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      _ctx: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    beforeAgreementCreated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementTerminated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beforeAgreementUpdated(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentReceiver(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
