
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","AddCrudAction"],["p","AddCrudAction::$_settings"],["m","AddCrudAction::_get()"],["m","AddCrudAction::_post()"],["m","AddCrudAction::_put()"],["cc","AddCrudAction::ACTION_SCOPE"],["c","ApiFieldFilterListener"],["p","ApiFieldFilterListener::$_relations"],["m","ApiFieldFilterListener::_associatedModelHasField()"],["m","ApiFieldFilterListener::_blacklistedField()"],["m","ApiFieldFilterListener::_checkField()"],["m","ApiFieldFilterListener::_getFields()"],["m","ApiFieldFilterListener::_getFieldsForQuery()"],["m","ApiFieldFilterListener::_getFieldsFromRequest()"],["m","ApiFieldFilterListener::_whitelistedAssociatedModel()"],["m","ApiFieldFilterListener::_whitelistedField()"],["m","ApiFieldFilterListener::allowNoFilter()"],["m","ApiFieldFilterListener::beforeFind()"],["m","ApiFieldFilterListener::beforePaginate()"],["m","ApiFieldFilterListener::blacklistFields()"],["m","ApiFieldFilterListener::implementedEvents()"],["m","ApiFieldFilterListener::whitelistFields()"],["m","ApiFieldFilterListener::whitelistModels()"],["c","ApiListener"],["p","ApiListener::$_settings"],["m","ApiListener::_checkRequestMethods()"],["m","ApiListener::_ensureData()"],["m","ApiListener::_ensureSerialize()"],["m","ApiListener::_ensureSuccess()"],["m","ApiListener::_exceptionResponse()"],["m","ApiListener::_expandPath()"],["m","ApiListener::beforeHandle()"],["m","ApiListener::implementedEvents()"],["m","ApiListener::injectViewClasses()"],["m","ApiListener::mapResources()"],["m","ApiListener::registerExceptionHandler()"],["m","ApiListener::render()"],["m","ApiListener::respond()"],["m","ApiListener::setFlash()"],["m","ApiListener::setup()"],["m","ApiListener::setupDetectors()"],["m","ApiListener::viewClass()"],["c","ApiPaginationListener"],["m","ApiPaginationListener::beforeRender()"],["m","ApiPaginationListener::implementedEvents()"],["c","ApiQueryLogListener"],["m","ApiQueryLogListener::_getQueryLogs()"],["m","ApiQueryLogListener::_getSource()"],["m","ApiQueryLogListener::_getSources()"],["m","ApiQueryLogListener::beforeRender()"],["m","ApiQueryLogListener::implementedEvents()"],["c","CrudAction"],["m","CrudAction::__construct()"],["m","CrudAction::_getFindMethod()"],["m","CrudAction::_getResourceName()"],["m","CrudAction::_redirect()"],["m","CrudAction::_validateId()"],["m","CrudAction::detectPrimaryKeyFieldType()"],["m","CrudAction::disable()"],["m","CrudAction::enable()"],["m","CrudAction::findMethod()"],["m","CrudAction::handle()"],["m","CrudAction::implementedEvents()"],["m","CrudAction::message()"],["m","CrudAction::saveMethod()"],["m","CrudAction::saveOptions()"],["cc","CrudAction::SCOPE_MODEL"],["cc","CrudAction::SCOPE_RECORD"],["m","CrudAction::setFlash()"],["m","CrudAction::view()"],["c","CrudBaseObject"],["p","CrudBaseObject::$_container"],["p","CrudBaseObject::$_settings"],["m","CrudBaseObject::__construct()"],["m","CrudBaseObject::_action()"],["m","CrudBaseObject::_controller()"],["m","CrudBaseObject::_crud()"],["m","CrudBaseObject::_listener()"],["m","CrudBaseObject::_model()"],["m","CrudBaseObject::_redirectUrl()"],["m","CrudBaseObject::_refererRedirectUrl()"],["m","CrudBaseObject::_request()"],["m","CrudBaseObject::_session()"],["m","CrudBaseObject::_subject()"],["m","CrudBaseObject::_trigger()"],["m","CrudBaseObject::_validationErrors()"],["m","CrudBaseObject::beforeHandle()"],["m","CrudBaseObject::config()"],["m","CrudBaseObject::implementedEvents()"],["c","CrudComponent"],["p","CrudComponent::$_action"],["p","CrudComponent::$_actionInstances"],["p","CrudComponent::$_controller"],["p","CrudComponent::$_eventLog"],["p","CrudComponent::$_eventManager"],["p","CrudComponent::$_listenerInstances"],["p","CrudComponent::$_model"],["p","CrudComponent::$_modelName"],["p","CrudComponent::$_request"],["p","CrudComponent::$components"],["p","CrudComponent::$settings"],["m","CrudComponent::__construct()"],["m","CrudComponent::_handlerClassName()"],["m","CrudComponent::_loadAction()"],["m","CrudComponent::_loadListener()"],["m","CrudComponent::_loadListeners()"],["m","CrudComponent::_mergeConfig()"],["m","CrudComponent::_normalizeConfig()"],["m","CrudComponent::_setModelProperties()"],["m","CrudComponent::action()"],["m","CrudComponent::addListener()"],["m","CrudComponent::config()"],["m","CrudComponent::defaults()"],["m","CrudComponent::disable()"],["m","CrudComponent::enable()"],["m","CrudComponent::eventLog()"],["m","CrudComponent::executeAction()"],["m","CrudComponent::findMethod()"],["m","CrudComponent::getSubject()"],["m","CrudComponent::initialize()"],["m","CrudComponent::isActionMapped()"],["m","CrudComponent::listener()"],["m","CrudComponent::logEvent()"],["m","CrudComponent::mapAction()"],["m","CrudComponent::on()"],["m","CrudComponent::removeListener()"],["m","CrudComponent::startup()"],["m","CrudComponent::trigger()"],["m","CrudComponent::useModel()"],["m","CrudComponent::validationErrors()"],["m","CrudComponent::view()"],["m","CrudComponent::viewVar()"],["c","CrudControllerTrait"],["p","CrudControllerTrait::$dispatchComponents"],["m","CrudControllerTrait::invokeAction()"],["c","CrudExceptionRenderer"],["m","CrudExceptionRenderer::_getErrorData()"],["m","CrudExceptionRenderer::_outputMessage()"],["m","CrudExceptionRenderer::_outputMessageSafe()"],["m","CrudExceptionRenderer::crudValidation()"],["c","CrudJsonView"],["m","CrudJsonView::_serialize()"],["c","CrudListener"],["m","CrudListener::implementedEvents()"],["c","CrudPanel"],["p","CrudPanel::$plugin"],["m","CrudPanel::_getCallbacks()"],["m","CrudPanel::_getClosureDefinition()"],["m","CrudPanel::_getUniqueName()"],["m","CrudPanel::beforeRender()"],["c","CrudSubject"],["p","CrudSubject::$_events"],["p","CrudSubject::$action"],["p","CrudSubject::$args"],["p","CrudSubject::$controller"],["p","CrudSubject::$crud"],["p","CrudSubject::$model"],["p","CrudSubject::$modelClass"],["p","CrudSubject::$request"],["p","CrudSubject::$response"],["m","CrudSubject::__construct()"],["m","CrudSubject::addEvent()"],["m","CrudSubject::getEvents()"],["m","CrudSubject::hasEvent()"],["m","CrudSubject::set()"],["m","CrudSubject::shouldProcess()"],["c","CrudValidationException"],["p","CrudValidationException::$_validationErrorCount"],["p","CrudValidationException::$_validationErrors"],["m","CrudValidationException::__construct()"],["m","CrudValidationException::_deriveRuleSpecific()"],["m","CrudValidationException::getValidationErrorCount()"],["m","CrudValidationException::getValidationErrors()"],["c","CrudXmlView"],["m","CrudXmlView::_serialize()"],["c","DebugKitListener"],["m","DebugKitListener::afterDelete()"],["m","DebugKitListener::afterFind()"],["m","DebugKitListener::afterPaginate()"],["m","DebugKitListener::afterSave()"],["m","DebugKitListener::beforeDelete()"],["m","DebugKitListener::beforeFind()"],["m","DebugKitListener::beforeHandle()"],["m","DebugKitListener::beforePaginate()"],["m","DebugKitListener::beforeRender()"],["m","DebugKitListener::beforeSave()"],["m","DebugKitListener::implementedEvents()"],["m","DebugKitListener::startup()"],["c","DeleteCrudAction"],["p","DeleteCrudAction::$_settings"],["m","DeleteCrudAction::_delete()"],["m","DeleteCrudAction::_post()"],["cc","DeleteCrudAction::ACTION_SCOPE"],["c","EditCrudAction"],["p","EditCrudAction::$_settings"],["m","EditCrudAction::_findRecord()"],["m","EditCrudAction::_get()"],["m","EditCrudAction::_injectPrimaryKey()"],["m","EditCrudAction::_notFound()"],["m","EditCrudAction::_post()"],["m","EditCrudAction::_put()"],["m","EditCrudAction::_validateId()"],["cc","EditCrudAction::ACTION_SCOPE"],["c","IndexCrudAction"],["p","IndexCrudAction::$_settings"],["m","IndexCrudAction::_get()"],["cc","IndexCrudAction::ACTION_SCOPE"],["m","IndexCrudAction::paginationConfig()"],["m","IndexCrudAction::viewVar()"],["c","RelatedModelsListener"],["m","RelatedModelsListener::_classRegistryInit()"],["m","RelatedModelsListener::_findRelatedItems()"],["m","RelatedModelsListener::_getAssociationType()"],["m","RelatedModelsListener::_getBaseQuery()"],["m","RelatedModelsListener::_getModelInstance()"],["m","RelatedModelsListener::_getTreeBehavior()"],["m","RelatedModelsListener::_hasTreeBehavior()"],["m","RelatedModelsListener::beforeRender()"],["m","RelatedModelsListener::models()"],["m","RelatedModelsListener::publishRelatedModels()"],["c","ScaffoldListener"],["m","ScaffoldListener::_associations()"],["m","ScaffoldListener::beforeFind()"],["m","ScaffoldListener::beforePaginate()"],["m","ScaffoldListener::beforeRender()"],["m","ScaffoldListener::implementedEvents()"],["c","SearchListener"],["p","SearchListener::$_settings"],["m","SearchListener::_checkRequiredPlugin()"],["m","SearchListener::_commonProcess()"],["m","SearchListener::_ensureBehavior()"],["m","SearchListener::_ensureComponent()"],["m","SearchListener::_setFilterArgs()"],["m","SearchListener::_setPaginationOptions()"],["m","SearchListener::beforeHandle()"],["m","SearchListener::beforePaginate()"],["m","SearchListener::implementedEvents()"],["m","SearchListener::scope()"],["c","TranslationsShell"],["p","TranslationsShell::$_path"],["p","TranslationsShell::$lines"],["m","TranslationsShell::_addDocBlock()"],["m","TranslationsShell::_getControllers()"],["m","TranslationsShell::_loadController()"],["m","TranslationsShell::_processAction()"],["m","TranslationsShell::_processController()"],["m","TranslationsShell::_processMessage()"],["m","TranslationsShell::_writeFile()"],["m","TranslationsShell::generate()"],["m","TranslationsShell::getOptionParser()"],["m","TranslationsShell::path()"],["c","ViewCrudAction"],["p","ViewCrudAction::$_settings"],["m","ViewCrudAction::_get()"],["cc","ViewCrudAction::ACTION_SCOPE"],["m","ViewCrudAction::viewVar()"]];
